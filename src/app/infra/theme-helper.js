
$(function () {



	$('#sidebar-collapse-btn').on('click', function(event){
		event.preventDefault();
		
		$("#app").toggleClass("sidebar-open");
	});

	$("#sidebar-overlay").on('click', function() {
		$("#app").removeClass("sidebar-open");
	});
	
});

    function drawItemsListSparklines(){
        $(".items-list-page .sparkline").each(function() {
            var type = $(this).data('type');

            // Generate random data
            var data = [];
            for (var i = 0; i < 17; i++) {
                data.push(Math.round(100 * Math.random()));
            }

            $(this).sparkline(data, {
                barColor: config.chart.colorPrimary.toString(),
                height: $(this).height(),
                type: type
            });
        });
    }

    drawItemsListSparklines();