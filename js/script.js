// function resize() {
//     let container = $(".container");
//     let title = $(".row:first-child");
//     let wrapper = $(".row:last-child");

//     wrapper.outerHeight(container.outerHeight() - title.outerHeight());
// }

// window.addEventListener('load', (event) => {
//     resize();
// });

// window.addEventListener('resize', (event) => {
//     resize();
// });


function blockClickHandler(event) {

    let innerBlock = $(".block-inner");
    innerBlock.off();

    let block = $(event.target.parentElement);

    block.children().first().css("transform", "rotateY(90deg)");
    setTimeout(
        function() {
            block.children().last().css("transform", "rotateY(180deg)");

        }, 300);


    setTimeout(
        function() {
            block.children().last().css("transform", "rotateY(90deg)");
            setTimeout(
                function() {
                    block.children().first().css("transform", "rotateY(0deg)");
                    innerBlock.on("click", blockClickHandler);
                }, 300);
        }, 2000);
}

$(".block-inner").on("click", blockClickHandler);