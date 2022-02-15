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
    ],
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

addRuleToParents();