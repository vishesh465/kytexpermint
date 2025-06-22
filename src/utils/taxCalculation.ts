export interface Income {
  salary: number;
  other: number;
  business: number;
  capitalGains: number;
  houseProperty: number;
}

export interface Deductions {
  section80C: number;
  section80D: number;
  section24B: number;
  nps: number;
}

export interface Investments {
  ppf: number;
  elss: number;
  nsc: number;
  fd: number;
  other: number;
}

export interface TaxSlab {
  upto?: number;
  rate: number;
  amount?: number;
}

export interface TaxBreakdown {
  grossIncome: number;
  totalDeductions: number;
  taxableIncome: number;
  slabs: TaxSlab[];
  tax: number;
  rebate: number;
  cess: number;
  totalTax: number;
  notes: string;
}

export interface TaxpayerInfo {
  pan: string;
  name: string;
  assessmentYear: string;
  regime: "new" | "old";
  category: "individual" | "huf" | "firm" | "llp" | "company";
  residentialStatus: "resident" | "non-resident";
  ageBand: "below60" | "above60" | "above80";
}

export default function calculateTaxBreakdown(
  income: Income,
  deductions: Deductions,
  investments: Investments,
  taxpayerInfo: TaxpayerInfo
): TaxBreakdown {
  // A. Determine applicable tax slabs
  const slabSets: Record<
    "new" | "old",
    { [k in TaxpayerInfo["ageBand"]]: { upto?: number; rate: number }[] }
  > = {
    new: {
      below60: [
        { upto: 3_00_000, rate: 0 },
        { upto: 6_00_000, rate: 5 },
        { upto: 9_00_000, rate: 10 },
        { upto: 12_00_000, rate: 15 },
        { upto: 15_00_000, rate: 20 },
        { rate: 30 },
      ],
      above60: [
        { upto: 3_00_000, rate: 0 },
        { upto: 6_00_000, rate: 5 },
        { upto: 9_00_000, rate: 10 },
        { upto: 12_00_000, rate: 15 },
        { upto: 15_00_000, rate: 20 },
        { rate: 30 },
      ],
      above80: [
        { upto: 3_00_000, rate: 0 },
        { upto: 6_00_000, rate: 5 },
        { upto: 9_00_000, rate: 10 },
        { upto: 12_00_000, rate: 15 },
        { upto: 15_00_000, rate: 20 },
        { rate: 30 },
      ],
    },
    old: {
      below60: [
        { upto: 2_50_000, rate: 0 },
        { upto: 5_00_000, rate: 5 },
        { upto: 10_00_000, rate: 20 },
        { rate: 30 },
      ],
      above60: [
        { upto: 3_00_000, rate: 0 },
        { upto: 5_00_000, rate: 5 },
        { upto: 10_00_000, rate: 20 },
        { rate: 30 },
      ],
      above80: [
        { upto: 5_00_000, rate: 0 },
        { upto: 10_00_000, rate: 20 },
        { rate: 30 },
      ],
    },
  };

  const slabsToApply =
    slabSets[taxpayerInfo.regime][taxpayerInfo.ageBand] ??
    slabSets.new.below60;

  // B. Calculate gross income
  const grossIncome =
    income.salary +
    income.other +
    income.business +
    income.capitalGains +
    income.houseProperty;

  // C. Total deductions
  const totalDeductions =
    deductions.section80C +
    deductions.section80D +
    deductions.section24B +
    deductions.nps;

  // D. Taxable income
  const taxableIncome = Math.max(grossIncome - totalDeductions, 0);

  // E. Calculate tax based on slabs
  let runningLower = 0;
  let tax = 0;
  const slabs: TaxSlab[] = [];

  for (const slab of slabsToApply) {
    const upper = slab.upto ?? Number.POSITIVE_INFINITY;
    const amountInSlab = Math.max(
      0,
      Math.min(taxableIncome, upper) - runningLower
    );
    if (amountInSlab <= 0) break;
    const slabTax = (amountInSlab * slab.rate) / 100;
    tax += slabTax;
    slabs.push({ upto: upper, rate: slab.rate, amount: amountInSlab });
    runningLower = upper;
  }

  // F. Apply rebate under section 87A
  let rebate = 0;
  if (
    (taxpayerInfo.regime === "new" && taxableIncome <= 7_00_000) ||
    (taxpayerInfo.regime === "old" && taxableIncome <= 5_00_000)
  ) {
    rebate = Math.min(tax, taxpayerInfo.regime === "new" ? 25_000 : 12_500);
  }

  tax -= rebate;

  // G. Health & education cess
  const cess = 0.04 * tax;

  // H. Final tax
  const totalTax = Math.round(tax + cess);

  return {
    grossIncome,
    totalDeductions,
    taxableIncome,
    slabs,
    tax: Math.round(tax),
    rebate,
    cess: Math.round(cess),
    totalTax,
    notes: `${
      taxpayerInfo.regime === "new" ? "New" : "Old"
    } regime – AY ${taxpayerInfo.assessmentYear}`,
  };
}
