// const tabs = () => {
//     function bindTab(tabWrapper, contentWrapperSelector, tabAttribute, activeClass=null) {
        // document.querySelector(tabWrapper).addEventListener('click', (e) => {
        //     const trigger = e.target.parentElement, 
        //     if(e.target && trigger.getAttribute(tabAttribute)) {
        //         document.querySelectorAll(contentWrapperSelector)
        //             .forEach(item => {
        //                 item.style.display="none";
        //             });
        //         document.querySelector('.'+ trigger.getAttribute(tabAttribute)).style.display = 'block';
                
        //         if (activeClass) {
        //             document.querySelector('.'+activeClass).classList.remove(activeClass);
        //             trigger.classList.add(activeClass);
        //         }
        //     }
        // });
//     }
//     bindTab('.glazing_slider', '.glazing_content', 'data-tab');
//     bindTab('.decoration_slider', '.decoration_content_item', 'data-decor-tab', 'after_click');
    
// }; 

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display="none"
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i=0) {
        content[i].style.display="block";

        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        console.log(target.parentNode);
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if(target  === item || target.parentNode === item) {
                    hideTabContent();
                    showTabContent(i);
                    console.log(item);
                }
            });
           
        }
    });

}; 
export default tabs;