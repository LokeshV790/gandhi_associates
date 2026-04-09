#!/usr/bin/env python3
"""
Backend API Testing for Vinod Gandhi & Associates Website
Tests all backend endpoints for functionality and data persistence
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend .env
BACKEND_URL = "https://preview-staging-11.preview.emergentagent.com/api"

def test_health_check():
    """Test GET /api/ - Health check endpoint"""
    print("\n=== Testing Health Check ===")
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "Vinod Gandhi & Associates" in data["message"]:
                print("✅ Health check passed")
                return True
            else:
                print("❌ Health check failed - incorrect message")
                return False
        else:
            print("❌ Health check failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Health check failed - Exception: {e}")
        return False

def test_contact_form_submission():
    """Test POST /api/contact/submit - Contact form submission"""
    print("\n=== Testing Contact Form Submission ===")
    try:
        contact_data = {
            "name": "Rajesh Kumar",
            "email": "rajesh.kumar@example.com",
            "phone": "9876543210",
            "subject": "Legal Consultation Inquiry",
            "message": "I need consultation regarding property dispute resolution. Please advise on the legal procedures."
        }
        
        response = requests.post(f"{BACKEND_URL}/contact/submit", json=contact_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "Thank you for contacting us" in data.get("message", ""):
                print("✅ Contact form submission passed")
                return True
            else:
                print("❌ Contact form submission failed - incorrect response format")
                return False
        else:
            print("❌ Contact form submission failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Contact form submission failed - Exception: {e}")
        return False

def test_get_contact_messages():
    """Test GET /api/contact/messages - Get contact messages"""
    print("\n=== Testing Get Contact Messages ===")
    try:
        response = requests.get(f"{BACKEND_URL}/contact/messages")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "data" in data and "count" in data:
                print("✅ Get contact messages passed")
                return True
            else:
                print("❌ Get contact messages failed - incorrect response format")
                return False
        else:
            print("❌ Get contact messages failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Get contact messages failed - Exception: {e}")
        return False

def test_get_case_laws():
    """Test GET /api/case-laws - Get all case laws"""
    print("\n=== Testing Get Case Laws ===")
    try:
        response = requests.get(f"{BACKEND_URL}/case-laws")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "data" in data and "count" in data:
                case_laws = data["data"]
                if len(case_laws) >= 6:  # Should have 6 seeded case laws
                    print(f"✅ Get case laws passed - Found {len(case_laws)} case laws")
                    return True
                else:
                    print(f"❌ Get case laws failed - Expected 6 case laws, found {len(case_laws)}")
                    return False
            else:
                print("❌ Get case laws failed - incorrect response format")
                return False
        else:
            print("❌ Get case laws failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Get case laws failed - Exception: {e}")
        return False

def test_search_case_laws():
    """Test GET /api/case-laws?search=tax - Search case laws"""
    print("\n=== Testing Search Case Laws ===")
    try:
        response = requests.get(f"{BACKEND_URL}/case-laws?search=tax")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "data" in data:
                case_laws = data["data"]
                # Check if results contain tax-related content
                tax_related = any("tax" in law.get("title", "").lower() or 
                                "tax" in law.get("category", "").lower() or
                                "tax" in law.get("description", "").lower()
                                for law in case_laws)
                if tax_related:
                    print(f"✅ Search case laws passed - Found {len(case_laws)} tax-related case laws")
                    return True
                else:
                    print("❌ Search case laws failed - No tax-related results found")
                    return False
            else:
                print("❌ Search case laws failed - incorrect response format")
                return False
        else:
            print("❌ Search case laws failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Search case laws failed - Exception: {e}")
        return False

def test_get_case_law_by_slug():
    """Test GET /api/case-laws/income-tax-80c-deductions - Get specific case law"""
    print("\n=== Testing Get Case Law by Slug ===")
    try:
        response = requests.get(f"{BACKEND_URL}/case-laws/income-tax-80c-deductions")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "data" in data:
                case_law = data["data"]
                if case_law.get("slug") == "income-tax-80c-deductions":
                    print("✅ Get case law by slug passed")
                    return True
                else:
                    print("❌ Get case law by slug failed - incorrect slug")
                    return False
            else:
                print("❌ Get case law by slug failed - incorrect response format")
                return False
        else:
            print("❌ Get case law by slug failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Get case law by slug failed - Exception: {e}")
        return False

def test_service_inquiry_submission():
    """Test POST /api/services/inquire - Service inquiry submission"""
    print("\n=== Testing Service Inquiry Submission ===")
    try:
        inquiry_data = {
            "name": "Priya Sharma",
            "email": "priya.sharma@example.com",
            "phone": "9123456789",
            "service_type": "Tax Advisory",
            "message": "I need consultation on GST compliance for my small business. Please provide guidance on filing procedures."
        }
        
        response = requests.post(f"{BACKEND_URL}/services/inquire", json=inquiry_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "Thank you for your inquiry" in data.get("message", ""):
                print("✅ Service inquiry submission passed")
                return True
            else:
                print("❌ Service inquiry submission failed - incorrect response format")
                return False
        else:
            print("❌ Service inquiry submission failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Service inquiry submission failed - Exception: {e}")
        return False

def test_get_service_inquiries():
    """Test GET /api/services/inquiries - Get service inquiries"""
    print("\n=== Testing Get Service Inquiries ===")
    try:
        response = requests.get(f"{BACKEND_URL}/services/inquiries")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "data" in data and "count" in data:
                print("✅ Get service inquiries passed")
                return True
            else:
                print("❌ Get service inquiries failed - incorrect response format")
                return False
        else:
            print("❌ Get service inquiries failed - wrong status code")
            return False
    except Exception as e:
        print(f"❌ Get service inquiries failed - Exception: {e}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Tests for Vinod Gandhi & Associates")
    print(f"Backend URL: {BACKEND_URL}")
    print("=" * 60)
    
    tests = [
        ("Health Check", test_health_check),
        ("Contact Form Submission", test_contact_form_submission),
        ("Get Contact Messages", test_get_contact_messages),
        ("Get Case Laws", test_get_case_laws),
        ("Search Case Laws", test_search_case_laws),
        ("Get Case Law by Slug", test_get_case_law_by_slug),
        ("Service Inquiry Submission", test_service_inquiry_submission),
        ("Get Service Inquiries", test_get_service_inquiries),
    ]
    
    results = []
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {e}")
            results.append((test_name, False))
    
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    print(f"Success Rate: {(passed/len(results)*100):.1f}%")
    
    return results

if __name__ == "__main__":
    results = run_all_tests()
    
    # Exit with error code if any tests failed
    failed_tests = [name for name, result in results if not result]
    if failed_tests:
        print(f"\n❌ Failed tests: {', '.join(failed_tests)}")
        sys.exit(1)
    else:
        print("\n✅ All tests passed!")
        sys.exit(0)