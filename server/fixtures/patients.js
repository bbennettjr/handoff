import { Patients } from "../../imports/api/patients/patients.js"

const fixtures = [
	{
		firstName: "Holly",
		lastName: "Sheflerson",
		name: "Holly Sheflerson",
		room: "1016",
		diagnosis: "Acute Pulmonary Embolism",
		hpi:
			"64 yo f whio was recently diagnosed with lung cancer likelpy mesthothilioma c/o acute onset of sob this am. Ems was called and they noted herto be hypoxic, tachypneac and tachycardic. In ed received cta: which showed extensive pe but questionable right heart strain as the tumor invades her pericardium.",
		pmh: "Recently diagnosied mesothelioma",
		medications: "Heparin drip, Tylenol 650mg PO Q6 PRN",
		allergies: "Penicillin, Augmentin",
		vitals: "Tachy, BP stable",
		labs: "",
		radiology:
			"CTA: New bilateral pulmonary emboli, predominantly involving the lower lobes.",
		plan: `1. Acute pe: continue hep gtt 
						Likeluy 2/2 malignancy. 
						Plan to transition to lovenox vs noac
						Continue nrb for now. Hypoxia much better now. Plan to transition to nc oxygen in afternoon. She is loc 2c 
						Check le dopplers and echo to r/o submassive pe 
					2. Mild hyponatremia euvolemic 2/2 ? Siadh
					3. Leucocytosis : reactive. f/u bc 
					4. Lactic acidosis: trend. Ns at 80 cc/hr
					5. Severe proteinc alorie maluntrition 
					6. Fen as she is on nrb, advance diet once off`,
		todo: "AM labs",
		coverage: `Lactic acid
Plan to transition to nc oxygen 
Echo 
Le dopplers`,
		condition: "Watcher",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Josine",
		lastName: "Roseano",
		name: "Josine Roseano",
		room: "2234",
		diagnosis: "Sepsis  likely pulmonary source ",
		hpi:
			"68 yo F came in with neck and shoulder pain unreleived with her home narcotics. She was also having altered mental status when she came inand fever 101.4f. She was recently  admitted for copd exacerbation and treated with levaquin but however his bc grew candida later. She was informed but didn’t follow up.  in ed received tylenol 1gm iv, ns 1l, flucanazole , cefepime and vanc loading.",
		pmh: `Htn, hld
Cad s/p cabg 
Aicd with dual chamber pacer
Endocarditis
Cva `,
		medications:
			"Zosin 3.375 Gm IV Q8, Vancomycin 1 Gm IV Q12, Digoxin 250 mcg PO Daily, Duloxetine 60mg PO Daily, Hydromorphone 0.25mg IV Q2 PRN Pain 4-7, Hydromorphone 0.5mg IV Q2 PRN Pain 8-10",
		allergies: "NKDA",
		vitals: "Septic, Febrile 102",
		labs: "Cx pending",
		radiology: "",
		plan: `1. cefepime and vanc loading. 
Neck pain ; chronic. Will give iv narcs
Later in am calculate medd and dose appropriately. 
2. encephalopathy: likely due to polypharmacy
3. sepsis: likely lung, bc grew candida unsure if its true or contaminant . Now has fever will give flucanazole, vanc and zosyn. Repeat bc a.d mrsa
4. anemia: fobt +, egd in 2013 : gastritis and avm . Gi c/s . Receing 1 prbc in ed f/u h em at 6 pm 
5. Loc 1 
6. Hypovolemic hyponatremia ns at 75 cc/hr
7 afib, pharmacy coumodin dosing. Sbp 100’s now. Resume other meds in am 
8. Fen hh
`,
		todo: `Am labs
Gi c/s
Pharmacy coumodin dose
Bc 
Ua
Urine and strep legio ag `,
		coverage: `Hb at 6 pm s/p 1 unit transfusion`,
		condition: "Unstable",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Anastasia",
		lastName: "Benedito",
		name: "Anastasia Benedito",
		room: "3016",
		diagnosis: "Acute decompensated CHF",
		hpi:
			"89 f sob after 2 prbc she is having crackles on examination cant speak full sentences with getting sob however all vitals stable spo2 97%",
		pmh: `Diastolic hf 
Heart block with pacemaker
Savr
Hypothyroidism
Afib on eliquis`,
		medications:
			"Apixaban 5mg PO BID, ASA 81mg PO QD, Furosemide 40mg IV BID, Levothydroxine 100mcg PO QDaily, Nitroglycerine 0.4mg SubLingual PRN, Pantoprazole 40mg PO QDaily",
		allergies: "Ace inhibitor",
		vitals: "Tachy 102, afebrile, BP 95/56, Pox 93% 4LNC",
		labs: "",
		radiology: "",
		plan: `Acute decompensated hf : lasix 40 iv bid 
I and o, daily weights, fluid restric
No chest pain, trop nd, ekg paced 
`,
		todo: "BMP, BNP, discharge tomorrow",
		coverage: "NTD",
		condition: "Stable",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Janet",
		lastName: "Pollar",
		name: "Janet Pollar",
		room: "ER 9",
		diagnosis: "Acute COPD Exacerbation",
		hpi: `69 f c/o sob x Friday . For the past 2 weeks has been fighting a cold. Cough with yellow sputum. Had sick contatcts around new years time when she visited a pub. In ed was tachycardic with hypoxia so d dimer was checked >1.5 cta: no pe. 
Ed meds: kcl 40 meq iv, ns 500ml, oplumedrol `,
		pmh: "COPD, HTN, Hypothyroidism",
		medications:
			"Albuterol-Ipratropium 3mL INH Q4, Azithromycin 250mg PO Q24, Fluticason-Salmeterol 230/21 2 PUFF INH Q12, Guaifenesin 600mg PO Q8, Methylprednisone 40mg IV Q6",
		allergies: "Shellfish, Sulfa drugs",
		vitals: "Septic, Febrile 101, tachypnic and tachycardic, Pox 94% BIPAP",
		labs: "Cx pending",
		radiology: `CTA: No CT evidence of a pulmonary embolism. Extensive emphysema3. New area of scarring within the right lung apex with a thickenedlinear opacity. A followup CT of the chest could be obtained withoutintravenous contrast 3 months to document stability
`,
		plan: `Acute copd exac: duonebs, spiriva, advair, azithromycin, solumedrol 
Htn : continuing home meds
Hypothyroidism: cont synthroid
Hypokalemia: 2/2 diuretic replete 120 today recheck bmp tom
Ckd stage 3 a stable
`,
		todo: "bmp, tsh, dispo",
		coverage: "NTD",
		condition: "Stable",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Walt",
		lastName: "Jenkins",
		name: "Walt Jenkins",
		room: "4305",
		diagnosis: "Acute GI Bleed",
		hpi:
			"83 m with melanotic stools x yesterday 2pm. On eliqus. Dropped 5gm hebmoglobin however vitals are stable. ",
		pmh: "HTN, HLD, Afib on Eliquis, CVA",
		medications: "Pantoprazole 40mg IV Q12, NS @ 75cc/hr",
		allergies: "NKDA",
		vitals: "Tachy, BP stable",
		labs: "Hgb 7.7",
		radiology: "",
		plan: `83 m with melanotic stools x yesterday 2pm. On eliqus. Dropped 5gm hebmoglobin however vitals are stable. `,
		todo: "",
		coverage: `Gi c/s f/u 
Post endoscopy notes 
Advance diet after gi scopes
Patient is gi bleeder eyeball bp and hr 

HB at 1700 and 2300`,
		condition: "Unstable",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Kimberly",
		lastName: "Stanley",
		name: "Kimberly Stanley",
		room: "4012",
		diagnosis: "MS Flare vs Acute Meningitis",
		hpi:
			"53 f with headache, neck pain and fever. Has a history of ms. Ct head: flare of ms. In ed had a tap and rocephin, vanc and ns x2l ",
		pmh: `Severe progressive ms
Seizures
Peripheral neuropathy`,
		medications:
			"Ampecillin 2gm IV Q4, Baclofen 20mg PO TID, Ceftriaxone 2gm IV Q12",
		allergies: "PCN",
		vitals: "Stable, afebrile",
		labs: "CSF pending, Bcx pending",
		radiology: "CTH: MS flare pathology",
		plan: `1)Dd ms flare vs meningitis; will continue rocephin. And ampicillin, mrsa : pending 
Csf studies: pending , bc pending
2)Ms : continuing home meds
`,
		todo: `Lp 
Bc
Id
Neuro
mrsa`,
		coverage: "NTD",
		condition: "Stable",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Elaine",
		lastName: "Daily",
		name: "Elaine Daily",
		room: "4607",
		diagnosis: "Acute thalamic ICH",
		hpi: `87-year-old female presents via EMS status post being found down following an apparent fall. Apparently patient lives in independent living at Riddle Village, believed to have had a fall last night and then was found on the floor this morning. On EMS arrival, they found patient to be confused and somewhat combative, noted blood on the wall and in her posterior head–––to the ED. On arrival patient is awake and alert, does not appear confused and is answering questions appropriately.`,
		pmh: "HTN, HLD, Chronic pain",
		medications: "Insulin SS, Pantoprazole 40mg QD",
		allergies: "NKDA",
		vitals: "",
		labs: "Hgb: 12",
		radiology:
			"CTHead – ICH 2x1cm deep thalamic, 0.5cm midline shift, surround vasogenic edema",
		plan: `#AMS – Acute thalamic ICH, likely hypertensive related per radiology
-Consult Neurosurg
-Possible small Asp Pna, no workup unless becomes febrile, signs and symp of sepsis
#HTN – Nicardipine gtt, goal SBP 120-140 
A line
Monitor UOP keep euvolemic to 1ml/kg/hr
#Troponemia – Trend Trops and EKGs, low threshold to heparinize her BUT ICH,  call cards if need to.
#Lactic Acidemia – Monitor LA Q8 in AM
#GERD – Omeprazole
#HLD – Cont statin
#Chronic pain – Hold to eval AMS and ability to respond to pain
#PPX – SCDs, NO ANTICOAGULATION`,
		todo: "Monitor UOP to keep euvolemic",
		coverage: `LA Q8 2200, 0600,
Trop, EKG Q6 2200, 0400, 1000,
-Call on call cardiology immediately if any ischemic change and/or trop increase.  Balance Heparin with ICH
`,
		condition: "Unstable",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Gerold",
		lastName: "Grimes",
		name: "Gerold Grimes",
		room: "4015",
		diagnosis: "VDRF",
		hpi: `73M presented with SOB DOE and orthopneax1 week. He was discontinued on his home lasix after lab tests showed his Cr was rising. Since the lasix was d/c he kept getting increasingly SOB. Also found to be AF with RVR.  On floor a rapid response was called 2/2 SOB he was brought to the ICU and intubated 2/2 increased work of breathing`,
		pmh: `CHF
HTN
AF
DM
COPD
CKD`,
		medications:
			"Albuterol-Ipratropium 1INH Q4, Insulin SS Lispro, SubQ Heparin",
		allergies: "Latex",
		vitals: "Pox 89%, RR 35, BP 102/34",
		labs: "K: 3.9, Na: 135, Cr: 1.7",
		radiology: `CXR - Worsening CHF b/l 
Increased infiltrate vs atelecatacsis on R
Echo – EF 35-40%, wall motion abnormality in LAD distro, decreased RV fx, restrictive diastolic filling
Renal US – hypoechoic masses anterior to both kidneys, R 7.6 cm, L 9.1cm, ddx urinoma vs blood vs masses
CT a/p – no retroperitoneal mass or collection, cholelithiasis, b/l pleural effusions, hyperdensity @ b/l LL bronchi
`,
		plan: `#HFrEF
Pulm edema improved s/p dialysis
Echo with EF 30-40%, WMA in LAD distro
Fluid restrict 1.5L, c/w ASA, statin
extubated

#VDRF 2/2 increased work of breathing
resolved

#AF with RVR
On Warfarin at home
Rate controlled currently;t/c restarting home warfarin

#ARF on CKD
Avoid nephrotoxic agents
Hyperkalemia resolved, c/w daily BMP
R permacath; dialysis x 2 so far
Likely will be dialysis dependent

#NSTEMI
 + trops, no CP, heparin gtt (?therapeutic), t/c transition to home warfarin

#DM: SSI + Lantus 3U HS

#HTN: hold home BB 2/2 HF

#COPD: Duonebs
-no signs of active infxn, d/c’ed Ceftriaxone and Azithro

#b/l anterior renal masses on US
-CT A/P negative for masses
`,
		todo: `If INR 2-3 then d/c heparin gtt and continue home warfarin (bridge complete)
Call lab to order factor 10a level to see if heparin gtt is working (PTT may not be reliable) ONLY IF HEP STILL ON
f/u dysphagia
HD tomorrow?
f/u DVT UE `,
		coverage: `If HR > 130, give the PRN lopressor  (already ordered)
No IV contrast
No NSAIDs
`,
		condition: "Watcher",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		firstName: "Fanney",
		lastName: "Russell",
		name: "Fanney Russell",
		room: "4015",
		diagnosis: "DKA",
		hpi: `56yo with hyperglycemia , woke up this AM with abd pain, associated with nausea and vomiting. Patient has been in DKA before, so family promptly brought her to ED.`,
		pmh: "CVA 2014, T1 DM",
		medications:
			"Insulin Critical Care Drip, KCL 40meq repletion, Ondansetron 4mg IV Q6 PRN",
		allergies: "NKDA",
		vitals: "Stable",
		labs: "AG 25, LA 3.5, pH 7.1",
		radiology: "",
		plan: `#DKA – BG 883, inc ketones, inc anion gap
2/2 noncompliance? 
Started on insulin crit care drip
BMPs q4hrs, BG checks q1hr
Monitor anion gap, goal <10
IVF: D5 1/2NS @200 cc/hr
Potassium repletion PRN
Home insulin (Lantus  15U QAM, Novolog 15U AC)
AG 9 – transitioned to subQ insulin, PO CC diet, d/c IVF, d/c insulin gtt

#AKI resolved
Likely prerenal 2/2 DKA
Supportive care with IVF

#Luekocytosis resolved
Likely reactive to DKA, trend CBC

#Hyponatremia - resolved
NA 131, likely 2/2 elevated blood glucose
Treat hyperglycemia and Na will correct

#Lactic acidosis - resolved
2/2 DKA
Continue supportive care with IVF

#Hx CVA
No focal motor deficits
Continue ASA and statin

FEN: D5 NS @100 cc/hr, NPO, Electrolytes PRN 
PPX: SQ Heparin
LOC 1
`,
		todo: `AM labs`,
		coverage: `Replete K, Mg, Phos PRN`,
		condition: "Stable",
		createdAt: new Date(),
		updatedAt: new Date()
	}
]

if (Patients.find().count() === 0) {
	for (let pt of fixtures) {
		Patients.insert(pt)
	}
}
