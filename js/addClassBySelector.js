//TODO: Generate these rules in the gulpfil from the json rules file
const rules = {
    "Images":[   
        {
            "title": "Images must have and alt attribute",
            "selector" : "img:not([alt])",
        },
        {
            "title": "Images with empty alt tags must be only for presentation",
            "selector" : "img[alt='']:not([role='presentation'])",
        },
    ]
}

const addRuleToParents = () => {
    for (const ruleType in rules){
        rules[ruleType].forEach((rule, index) => {
            let ruleBreaks = Array.from(document.querySelectorAll(`${rule.selector}`));
            ruleBreaks.forEach(ruleBreak => {
                ruleBreak.parentElement.classList.add(`ParentRule__${ruleType}${index+1}`)
            })
        })
    }
}

const headingsAreNotSkipped = () => {
    const headingExists = [];
    for (let i =1; i <=6; i++) {
        let numHeading = document.querySelectorAll(`h${i}`).length
        headingExists.push(numHeading > 0);
    }
    for (let i=0; i < headingExists.length-1; i++){
        if (!headingExists[i]){
            if(headingExists[i+1]){
                Array.from(document.querySelectorAll(`h${i+2}`))
                    .forEach(heading => heading.classList.add(`HeadingOrderViolatedH${i+2}`))
            }
        }
    }
}

addRuleToParents();
headingsAreNotSkipped();