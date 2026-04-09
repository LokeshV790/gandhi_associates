"""
Script to seed initial data into MongoDB
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

async def seed_case_laws():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    # Check if case laws already exist
    existing = await db.case_laws.count_documents({})
    if existing > 0:
        print(f"Case laws already seeded ({existing} documents). Skipping...")
        client.close()
        return
    
    case_laws = [
        {
            "id": "1",
            "title": "Income Tax Act - Section 80C Deductions",
            "category": "Income Tax",
            "description": "Comprehensive guide on eligible deductions under Section 80C including investment options, maximum limits, and documentation requirements.",
            "content": "Section 80C of the Income Tax Act provides tax deductions on specific investments and expenses. The maximum deduction limit is Rs. 1.5 lakh per financial year. Eligible investments include PPF, EPF, NSC, ELSS, life insurance premiums, principal repayment of home loans, and tuition fees.",
            "date": "2024",
            "tags": ["income-tax", "deductions", "80c", "investments"],
            "slug": "income-tax-80c-deductions",
        },
        {
            "id": "2",
            "title": "GST Compliance for Small Businesses",
            "category": "GST",
            "description": "Understanding GST compliance requirements for small and medium enterprises including filing procedures and deadlines.",
            "content": "Small businesses with turnover up to Rs. 40 lakh (Rs. 20 lakh for special category states) are exempt from GST registration. However, registered businesses must file GSTR-1, GSTR-3B monthly/quarterly based on turnover, and annual return GSTR-9.",
            "date": "2024",
            "tags": ["gst", "compliance", "small-business", "filing"],
            "slug": "gst-compliance-small-businesses",
        },
        {
            "id": "3",
            "title": "Corporate Tax Planning Strategies",
            "category": "Corporate Tax",
            "description": "Legitimate tax planning strategies for corporations to optimize tax liability while maintaining full compliance.",
            "content": "Corporate tax planning involves strategic decisions regarding business structure, timing of income and expenses, depreciation methods, and utilization of tax incentives. Companies should consider Section 115BAA for lower tax rates and properly document all tax-saving strategies.",
            "date": "2023",
            "tags": ["corporate-tax", "tax-planning", "compliance", "optimization"],
            "slug": "corporate-tax-planning-strategies",
        },
        {
            "id": "4",
            "title": "Audit Requirements Under Companies Act",
            "category": "Company Law",
            "description": "Statutory audit requirements for various types of companies under the Companies Act 2013.",
            "content": "All companies registered under the Companies Act 2013 must appoint a statutory auditor within 30 days of incorporation. The auditor examines financial statements, ensures compliance with accounting standards, and provides an independent audit report. Small companies have relaxed audit requirements.",
            "date": "2023",
            "tags": ["audit", "companies-act", "statutory-compliance", "corporate-law"],
            "slug": "audit-requirements-companies-act",
        },
        {
            "id": "5",
            "title": "TDS Provisions and Compliance",
            "category": "Income Tax",
            "description": "Complete overview of Tax Deducted at Source provisions, rates, and compliance procedures.",
            "content": "TDS is a mechanism to collect tax at the source of income generation. Employers, businesses, and individuals making specified payments must deduct TDS at prescribed rates. TDS returns (Form 24Q, 26Q, 27Q) must be filed quarterly, and TDS certificates issued to deductees.",
            "date": "2024",
            "tags": ["tds", "tax-deduction", "compliance", "returns"],
            "slug": "tds-provisions-compliance",
        },
        {
            "id": "6",
            "title": "Foreign Exchange Management Act Guidelines",
            "category": "FEMA",
            "description": "Key FEMA regulations for businesses involved in foreign exchange transactions and investments.",
            "content": "FEMA regulates foreign exchange transactions, including export/import of goods and services, foreign investments, and overseas remittances. Businesses must comply with RBI guidelines, maintain proper documentation, and file periodic returns for foreign exchange transactions.",
            "date": "2023",
            "tags": ["fema", "foreign-exchange", "rbi", "compliance"],
            "slug": "fema-guidelines",
        },
    ]
    
    result = await db.case_laws.insert_many(case_laws)
    print(f"Successfully seeded {len(result.inserted_ids)} case laws")
    
    client.close()

if __name__ == "__main__":
    print("Seeding database with initial data...")
    asyncio.run(seed_case_laws())
    print("Database seeding completed!")
