const dayjs = require('dayjs');

const INPUT_SEARCH = ".MuiInputBase-input",
    COMPANY_CARD = ".MuiCardContent-root",
    BTN_EARLIEST = "[data-testid='earliest-button']",
    BTN_LATEST = "[data-testid='latest-button']",
    BTN_TIME = "[data-testid='date']";

const endDate = "01 Jan 2020";
const startDate = "01 Jan 2018"
const endDateFormatedTime = dayjs(endDate).format('YYYY-MM-DD');
const startDateFormatedTime = dayjs(startDate).format('YYYY-MM-DD');

class companySearchPage {

    /**
     * This method is used to search company card with a compnay name
     * @param {String} companyName compnay name
     */
     static searchCompany(companyName) {

        cy.get(INPUT_SEARCH).clear().type(companyName)
    }

    /**
     * This method is used to verify duplicate company cards
     * @param {String} companyName company name
     */
    static verifyDuplicateCompanyCard(companyName){

        cy.get(COMPANY_CARD).should('contain', companyName).and('have.length', 1)
    }

    /**
     * This method is used to verify the compnay card latest sorting option
     */
    static verifyLatestDateCompanyCard() {

        var compnayCardLatest = []
            cy.get(BTN_TIME).each(($el) => {
                compnayCardLatest.push($el.text()) 
              }) 
              .then(() => {
                var firstCard = compnayCardLatest[0];
                const firstCardFormatedTime = dayjs(firstCard).format('YYYY-MM-DD');

              const result = dayjs(firstCardFormatedTime).isAfter(dayjs(endDateFormatedTime))
                    cy.then(() => {
                        expect(result).to.eq(true)
                    })
              })    
    }

    /**
     * This method is used to verify the compnay card Earlist sorting option
     */
    static verifyEarlistDateCompanyCard() {

        var compnayCardEarlist = []
            cy.get(BTN_TIME).each(($el) => {
                compnayCardEarlist.push($el.text()) 
              }) 
              .then(() => {
                var firstCard = compnayCardEarlist[0];
                const firstCardFormatedTime = dayjs(firstCard).format('YYYY-MM-DD');

              const result = dayjs(firstCardFormatedTime).isAfter(dayjs(startDateFormatedTime))
                    cy.then(() => {
                        expect(result).to.eq(true)
                    })
              })       
    }

    /**
     * This method is used to click on Earlist Button
     */
    static clickOnEarliestBtn() {

        cy.get(BTN_EARLIEST)
        .contains('earliest') 
        .should('be.visible').click({force:true})
    }

    /**
     * This method is used to click on Latest Button
     */
    static clickOnlatestBtn() {

        cy.get(BTN_LATEST)
        .contains('latest') 
        .should('be.visible').click({force:true})
    }
}

export default companySearchPage;
