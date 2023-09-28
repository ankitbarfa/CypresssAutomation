describe('My Test suite ',function(){
    it('my first case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($el ,index, $list)=>{
            const textData1 = $el.text()
            if(textData1.includes("Python")){
                cy.get('tr td:nth-child(2)').next().eq(index).then(function(price){
                const testdata2 = price.text()
                cy.log(`testdata2: ${testdata2}`);
                expect(testdata2).to.equal('25')
                   }  )
            }
        })
       
    })
})



