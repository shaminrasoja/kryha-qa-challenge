
import companySearchPage from "../page-objects/search.js";

const siteUrl = "http://localhost:3000/";
const companySearchName = "Tom";

describe("01 - User search company cards", () => {

  it('01.01 - Verify the search count for given search term', () => {

    cy.visit(siteUrl);
    companySearchPage.searchCompany(companySearchName);
    companySearchPage.verifyDuplicateCompanyCard(companySearchName);

  })

  it('01.02 - Verify compnay card sorting with latest ', () => {

    cy.reload()
    cy.wait(500)
    companySearchPage.clickOnlatestBtn();
    companySearchPage.verifyLatestDateCompanyCard();
    
  })
  
  it('01.03 - Verify compnay card sorting with earliest ', () => {

    companySearchPage.clickOnEarliestBtn();
    companySearchPage.verifyEarlistDateCompanyCard();
    
  })

})
