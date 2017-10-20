import { Medications } from "../../imports/api/medications/medications.js"

const fixtures = [
  {
    name: "Acetaminophen",
    strength: ["650"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q4, Q6"],
    regularity: ["PRN"],
    indication: "Pain scale 1-3"
  },
  {
    name: "Ibuprofen",
    strength: ["600"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q8"],
    regularity: ["PRN"],
    indication: "Pain scale 1-3"
  },
  {
    name: "Ketorolac",
    strength: ["15"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q6"],
    regularity: ["PRN"],
    indication: "Pain scale 1-3"
  },
  {
    name: "Morphine",
    strength: ["0.5"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q2"],
    regularity: ["PRN"],
    indication: "Pain scale 1-3"
  },
  {
    name: "Acetaminophen-Codeine #3",
    strength: ["300/30"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q4"],
    regularity: ["PRN"],
    indication: "Pain scale 4-7"
  },
  {
    name: "Oxycodone IR",
    strength: ["5"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q4"],
    regularity: ["PRN"],
    indication: "Pain scale 4-7"
  },
  {
    name: "Morphine",
    strength: ["1"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q2"],
    regularity: ["PRN"],
    indication: "Pain scale 4-7"
  },
  {
    name: "Hydromorphone",
    strength: ["0.25"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q2"],
    regularity: ["PRN"],
    indication: "Pain scale 4-7"
  },
  {
    name: "Oxycodone IR",
    strength: ["10"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q4"],
    regularity: ["PRN"],
    indication: "Pain scale 8-10"
  },
  {
    name: "Hydromorphone",
    strength: ["2"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q4"],
    regularity: ["PRN"],
    indication: "Pain scale 8-10"
  },
  {
    name: "Hydromorphone",
    strength: ["0.5"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q2"],
    regularity: ["PRN"],
    indication: "Pain scale 8-10"
  },
  {
    name: "Morphine",
    strength: ["2"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q2"],
    regularity: ["PRN"],
    indication: "Pain scale 8-10"
  },
  {
    name: "Ampicillin/Sulbactam",
    strength: ["3"],
    unit: "Grams",
    route: ["IV"],
    frequency: ["Q6"],
    regularity: [""]
  },
  {
    name: "Azithromycin",
    strength: ["500"],
    unit: "mg",
    route: ["IV", "PO"],
    frequency: ["Q24"],
    regularity: [""]
  },
  {
    name: "Cefazolin",
    strength: ["1"],
    unit: "Gram",
    route: ["IV"],
    frequency: ["Q8"],
    regularity: [""]
  },
  {
    name: "Ceftriaxone",
    strength: [""],
    unit: "mg",
    route: ["IV", "PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Clindamycin",
    strength: ["600", "900"],
    unit: "mg",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Fluconazole",
    strength: ["200", "400"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q24"],
    regularity: [""]
  },
  {
    name: "Levofloxacin",
    strength: [""],
    unit: "mg",
    route: ["IV", "PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Metronidazole",
    strength: ["500"],
    unit: "mg",
    route: ["IV", "PO"],
    frequency: ["Q8"],
    regularity: [""]
  },
  {
    name: "Sulfamethoxazole-Trimethoprim",
    strength: ["DS"],
    unit: "",
    route: ["PO"],
    frequency: ["Q12"],
    regularity: [""]
  },
  {
    name: "Aspirin",
    strength: ["81", "325"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Aspirin EC",
    strength: ["81", "325"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Cilostazol",
    strength: ["100"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Clopidogrel",
    strength: ["75"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Enoxaparin",
    strength: [],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Heparin",
    strength: ["5000", "7500"],
    unit: "Units",
    route: ["Subcutaneous"],
    frequency: ["Q8"],
    regularity: [""]
  },
  {
    name: "Prasugrel",
    strength: ["10"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Warfarin",
    strength: [],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Amiodarone",
    strength: ["200"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q12", "QDay"],
    regularity: [""]
  },
  {
    name: "Amlodipine",
    strength: ["2.5", "5", "10"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Atenolol",
    strength: ["25", "50"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Carvedilol",
    strength: ["3.125", "6.25", "12.5", "25"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q12"],
    regularity: [""]
  },
  {
    name: "Clonidine",
    strength: ["0.1", "0.2", "0.3"],
    unit: "mg",
    route: ["PO"],
    frequency: ["BID", "TID"],
    regularity: [""]
  },
  {
    name: "Digoxin",
    strength: ["125", "250"],
    unit: "mcg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Diltiazem",
    strength: ["30", "60", "90", "120", "180", "240", "300"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q6", "QDay"],
    regularity: [""]
  },
  {
    name: "Enalapril/Enalaprilat",
    strength: ["2.5", "5", "10"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Furosemide",
    strength: [],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Isosorbide Mononitrate",
    strength: ["30", "60"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Lisinopril",
    strength: [],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Metoprolol Tartrate IR",
    strength: ["12.5", "25", "50"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q12"],
    regularity: [""]
  },
  {
    name: "Metoprolol Succinate ER",
    strength: ["25", "50", "100"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Nifedipine",
    strength: ["30", "60", "90"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Nitroglycerin",
    strength: ["0.4"],
    unit: "mg",
    route: ["Sublingual"],
    frequency: ["QDay"],
    regularity: ["PRN"]
  },
  {
    name: "Valsartan",
    strength: ["40", "80", "160"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Ascorbic Acid (Vitamin C)",
    strength: ["500"],
    unit: "mg",
    route: ["PO"],
    frequency: ["BID"],
    regularity: [""]
  },
  {
    name: "Calcium Carbonate",
    strength: ["500"],
    unit: "mg",
    route: ["PO"],
    frequency: ["ACHS"],
    regularity: [""]
  },
  {
    name: "Calcium Carbonate-Vitamin D3",
    strength: ["250"],
    unit: "mg",
    route: ["PO"],
    frequency: ["BID"],
    regularity: [""]
  },
  {
    name: "Calcium",
    strength: [""],
    unit: "mg",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Folic Acid",
    strength: ["1"],
    unit: "mg",
    route: ["PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Ferrous Sulfate",
    strength: ["325"],
    unit: "mg",
    route: ["PO"],
    frequency: ["TID"],
    regularity: [""]
  },
  {
    name: "Magnesium Oxide",
    strength: ["400"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Once, BID"],
    regularity: [""]
  },
  {
    name: "Magnesium Sulfate",
    strength: [""],
    unit: "mg",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Normal Saline / Thiamine / Folic Acid",
    strength: ["1000 / 100 / 1"],
    unit: "mg",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Thiamine / Folic Acid",
    strength: ["100 / 1"],
    unit: "mg",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Potassium Chloride",
    strength: ["20", "40"],
    unit: "mEq",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Potassium Phosphate",
    strength: [""],
    unit: "mg",
    route: ["IV", "PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Sodium Phosphate",
    strength: ["10", "20", "30"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Once"],
    regularity: [""]
  },
  {
    name: "Thiamine",
    strength: ["100"],
    unit: "mg",
    route: ["PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Bisacodyl",
    strength: ["10"],
    unit: "mg",
    route: ["Suppository"],
    frequency: ["PRN"],
    regularity: [""]
  },
  {
    name: "Docusate Sodium",
    strength: [""],
    unit: "mg",
    route: [""],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Famotidine",
    strength: [""],
    unit: "mg",
    route: [""],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Loperamide",
    strength: ["2"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Q6"],
    regularity: ["PRN"]
  },
  {
    name: "Metoclopramide",
    strength: [""],
    unit: "mg",
    route: [""],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Ondansetron",
    strength: [""],
    unit: "mg",
    route: [""],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Pantoprazole",
    strength: [""],
    unit: "mg",
    route: [""],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Prochlorperazine",
    strength: ["5"],
    unit: "mg",
    route: ["IV"],
    frequency: ["Q6"],
    regularity: ["PRN"]
  },
  {
    name: "Senna-Docusate Sodium",
    strength: [""],
    unit: "mg",
    route: [""],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Senna",
    strength: [""],
    unit: "mg",
    route: [""],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Sucralfate",
    strength: ["1"],
    unit: "Gram",
    route: ["PO"],
    frequency: ["Q6"],
    regularity: [""]
  },
  {
    name: "Insulin Lispro",
    strength: [""],
    unit: "",
    route: ["IV", "Subcutaneous"],
    frequency: ["Sliding Scale", "ACHS"],
    regularity: [""]
  },
  {
    name: "Insulin Regular",
    strength: [""],
    unit: "",
    route: ["IV", "Subcutaneous"],
    frequency: ["Sliding Scale", "ACHS"],
    regularity: [""]
  },
  {
    name: "Insulin Glargine",
    strength: [""],
    unit: "",
    route: ["Subcutaneous"],
    frequency: ["QHS"],
    regularity: [""]
  },
  {
    name: "Insulin NPH",
    strength: [""],
    unit: "",
    route: ["Subcutaneous"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Insulin NPH / Regular",
    strength: ["70 / 30"],
    unit: "",
    route: ["Subcutaneous"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Insulin NPL / Lispro",
    strength: ["75 / 25"],
    unit: "",
    route: ["Subcutaneous"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Insulin Detemir",
    strength: [""],
    unit: "",
    route: ["Subcutaneous"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Acarbose",
    strength: ["25", "50"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Before meals"],
    regularity: [""]
  },
  {
    name: "Alogliptin",
    strength: ["6.25", "12.50", "25"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Glimepiride",
    strength: ["2"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Glipizide",
    strength: ["5"],
    unit: "mg",
    route: ["PO"],
    frequency: ["BID", "QDay"],
    regularity: [""]
  },
  {
    name: "Glyburide",
    strength: ["5"],
    unit: "mg",
    route: ["PO"],
    frequency: ["BID", "QDay"],
    regularity: [""]
  },
  {
    name: "Metformin",
    strength: ["500"],
    unit: "mg",
    route: ["PO"],
    frequency: ["BID", "QDay"],
    regularity: [""]
  },
  {
    name: "Pioglitazone",
    strength: ["15", "30"],
    unit: "mg",
    route: ["PO"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Repaglinide",
    strength: ["0.5", "1"],
    unit: "mg",
    route: ["PO"],
    frequency: ["Before meals"],
    regularity: [""]
  },
  {
    name: "Albuterol",
    strength: [""],
    unit: "2 Puffs",
    route: ["Inhaled"],
    frequency: ["Q4"],
    regularity: ["", "QID", "PRN"]
  },
  {
    name: "Fluticasone-Salmeterol",
    strength: ["45 / 21", "115 / 21", "230 / 21"],
    unit: "Puffs",
    route: ["Inhaled"],
    frequency: ["Q12"],
    regularity: [""]
  },
  {
    name: "Fluticasone",
    strength: ["110 mcg"],
    unit: "2 Puffs",
    route: ["Inhaled"],
    frequency: ["Q12"],
    regularity: [""]
  },
  {
    name: "Tiotropium Bromide",
    strength: ["18"],
    unit: "1 Puff",
    route: ["Inhaled"],
    frequency: ["QDay"],
    regularity: [""]
  },
  {
    name: "Ipratropium Bromide",
    strength: ["17 mcg"],
    unit: "2 Puffs",
    route: ["Inhaled"],
    frequency: ["Q4", "QID"],
    regularity: [""]
  },
  {
    name: "Nebulized Albuterol",
    strength: ["2.5"],
    unit: "mg",
    route: ["Inhaled"],
    frequency: ["Q4", "Q6", "QID"],
    regularity: ["", "PRN"]
  },
  {
    name: "Nebulized Budesonide",
    strength: ["0.25", "0.5"],
    unit: "mg",
    route: ["Inhaled"],
    frequency: ["Q12"],
    regularity: [""]
  },
  {
    name: "Nebulized Ipratropium-Albuterol (Duoneb)",
    strength: [""],
    unit: "",
    route: ["Inhaled"],
    frequency: ["Q4", "TID", "QID"],
    regularity: ["", "PRN"]
  },
  {
    name: "Dexamethasone",
    strength: [""],
    unit: "",
    route: ["IV", "PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Hydrocortisone",
    strength: [""],
    unit: "",
    route: ["IV", "PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Methylprednisolone",
    strength: [""],
    unit: "",
    route: ["IV", "PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Prednisone",
    strength: [""],
    unit: "",
    route: ["PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Diazepam",
    strength: [""],
    unit: "",
    route: ["PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Lorazepam",
    strength: [""],
    unit: "",
    route: ["IV", "PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Oxazepam",
    strength: [""],
    unit: "",
    route: ["PO"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "D5W",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "D5W + KCL",
    strength: ["20", "40"],
    unit: "mEq",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "D5 1/2 Normal Saline",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "D5 1/2 Normal Saline + KCL",
    strength: ["20", "40"],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "D5 Normal Saline",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "D5 Normal Saline + KCL",
    strength: ["20", "40"],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Normal Saline",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Normal Saline + KCL",
    strength: ["20", "40"],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "1/2 Normal Saline",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Lactated Ringers",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "IV Bolus",
    strength: ["250", "500", "1000", "2000"],
    unit: "mL",
    route: ["IV"],
    frequency: [""],
    regularity: [""]
  },
  {
    name: "Budesonide",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Conivaptan",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Diltiazem Bolus + Drip",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Diltiazem",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Dobutamine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Dopamine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Epinephrine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Esmolol",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Fentanyl",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Furosemide",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Heparin",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Hydromorphone",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Insulin",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Isoproterenol",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Labetalol",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Lidocaine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Lorazepam",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Midazolam",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Milrinone",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Morphine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Naloxone",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Nicardipine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Nitroglycerin",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Nitroprusside",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Norepinephrine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Octreotide",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Phenylephrine",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Procainamide",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Theophylline",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  },
  {
    name: "Vasopressin",
    strength: [""],
    unit: "",
    route: ["IV"],
    frequency: ["Continuous Drip"],
    regularity: [""]
  }
]

if (Medications.find().count() === 0) {
  for (let med of fixtures) {
    Medications.insert(med)
  }
}
