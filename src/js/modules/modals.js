const modals = () => {
                        // btn,a elem  closingBtn
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = triggerSelector = document.querySelectorAll(triggerSelector),
              modal = modalSelector = document.querySelector(modalSelector),
              close = closeSelector = document.querySelector(closeSelector);

              
        console.log('bindModal');
        trigger.forEach( item => {
            item.addEventListener('click', (e) => {
                console.log('e');
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overflow='hidden';
                // document.body.classList.add('modal-open');
            });
        })
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow='';
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow='';
                // document.body.classList.remove('modal-open'); 
            }
        });
    }

    function showModalByTime(modalSelector, time) {
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow='hidden';
        }, time*1000);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 2);
};

export default modals;