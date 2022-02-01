"use strict";

(function IIFE() {
    const mountRainerContent = document.getElementById('mount-rainer');
    const snoqualmieContent = document.getElementById('snoqualmie');
    const franklinfallsContent = document.getElementById('franklinfalls');
    const sunriseContent = document.getElementById('sunrise');

    const seattleCenterContent = document.getElementById('space-needle');
    const seattleWaterfrontContent = document.getElementById('seattlewaterfront');
    const lakeunionContent = document.getElementById('lakeunion');
    const seattledowntownContent = document.getElementById('seattledowntown');
    const museumflightContent = document.getElementById('museumflight');

    const urlSearch = document.location.search;

    const displayContent = (urlParamToSearch, element) => {
        if (urlSearch.includes(urlParamToSearch)) {
            element.classList.remove('hide');
        }
    }

    displayContent('mount-rainer', mountRainerContent);
    displayContent('snoqualmie', snoqualmieContent);
    displayContent('franklinfalls', franklinfallsContent);
    displayContent('sunrise', sunriseContent);

    displayContent('seattlecenter', seattleCenterContent);
    displayContent('waterfront', seattleWaterfrontContent);
    displayContent('lakeunionpark', lakeunionContent);
    displayContent('downtownseattle', seattledowntownContent);
    displayContent('mueseum', museumflightContent);

    // Show other input when other option is selected in dropdown in form
    const interestDropdown = document.getElementById('interest');
    const otherInputs = document.getElementsByClassName('other-interest');
    interestDropdown.addEventListener('change', (ev) => {
        if (interestDropdown.value == "Other") {
            Array.from(otherInputs).forEach(e => {
                e.classList.remove('hide');
            });

        }
        else {
            for (let e of otherInputs) {
                Array.from(otherInputs).forEach(e => {
                    e.classList.add('hide');
                });
            }
        }
    })

})();

