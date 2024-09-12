/* onResize 이벤트*/
function onResize() {
	$(".wrap").css("padding-top", $("header").outerHeight() + "px");
}

/* scroll 이벤트 */
function onScroll() {
	const windowTop = $(this).scrollTop() + window.innerHeight;
	const pageTop = $('.page3').offset().top + 200;

	if ($(this).scrollTop() > 50) {
		$('header').css('box-shadow', '0 0 1px 3px rgba(0, 0, 0, 0.04)');
	} else {
		$('header').css('box-shadow', 'none');
	}

	if (windowTop > pageTop && !$('.info_complete').hasClass('active')) {
		$('.info_complete').addClass('active');
	}
}

/* 사전 예약 바로가기 */
function onBottomClick() {
	$('html, body').stop().animate({
		'scrollTop': $('.page3').offset().top - $("header").outerHeight() + "px"
	}, 300);
}

/* 이벤트 선언 */
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger('scroll');
$('.shortcut_btn').click(onBottomClick);

/* 버튼 신청 후 효과 */
$('.submit_btn').click(function () {
	Swal.fire({
		title: "문의하기를 등록하시겠습니까?",
		icon: "info",
		showCancelButton: true,
		/* confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33", */
		background: "#fff",
		color: "#222",
		confirmButtonText: "확인",
		cancelButtonText: "취소",
		customClass: {
			title: 'custom-swal-title',
			popup: 'custom-swal-popup',
			icon: 'custom-swal-icon',
			confirmButton: 'custom-swal-btn',
			cancelButton: 'custom-swal-btn'
		}
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: "사전 예약 신청이 완료되었습니다.",
				icon: "success",
				background: "#fff",
				color: "#222",
				confirmButtonText: "확인",
				customClass: {
					title: 'custom-swal-title',
					popup: 'custom-swal-popup',
					icon: 'custom-swal-icon',
					confirmButton: 'custom-swal-btn',
				}
			}).then(() => {
				$(this).addClass('active');
			});
		}
	});
});