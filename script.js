var previews = {
	gnextop: ['img/gnextop/screenshot1.jpg', 'img/gnextop/screenshot6.jpg', 'img/gnextop/screenshot8.jpg', 'img/gnextop/screenshot9.jpg', 'img/gnextop/screenshot11.jpg', 'img/gnextop/screenshot12.jpg', 'img/gnextop/screenshot13.jpg', 'img/gnextop/screenshot14.jpg', 'img/gnextop/screenshot16.jpg', 'img/gnextop/screenshot17.jpg', 'img/gnextop/screenshot0.jpg', 'img/gnextop/screenshot2.jpg', 'img/gnextop/screenshot3.jpg', 'img/gnextop/screenshot4.jpg', 'img/gnextop/screenshot5.jpg', 'img/gnextop/screenshot7.jpg', 'img/gnextop/screenshot10.jpg', 'img/gnextop/screenshot15.jpg'],
	pspwxp: ['img/pspwxp/apps.jpg', 'img/pspwxp/B00000002.jpg', 'img/pspwxp/B00000004.jpg', 'img/pspwxp/B00000005.jpg', 'img/pspwxp/B00000006.jpg', 'img/pspwxp/B00000007.jpg', 'img/pspwxp/B00000008.jpg', 'img/pspwxp/desktop.jpg', 'img/pspwxp/file.jpg', 'img/pspwxp/games.jpg', 'img/pspwxp/internet.jpg', 'img/pspwxp/login.gif', 'img/pspwxp/pspwxp1.jpg', 'img/pspwxp/pspwxp3.jpg', 'img/pspwxp/setting.jpg', 'img/pspwxp/text.gif', 'img/pspwxp/pspwxp2.jpg']
};


$(function () {
	['pspwxp', 'gnextop'].forEach(function (product) {
		var images = previews[product],
			$preview = $('.' + product + ' .preview'),
			$dots = $preview.find('ul.dots'),
			i = 0,
			go = function () {
				i = i < images.length - 1 ? i + 1 : 0;

				var $img = $preview.find('img'),
					$img2 = $('<img>').attr('src', images[i]);

				$preview.append($img2);
				setTimeout(function () {
					$img2.addClass('show');
					$dots.find(':nth-child(' + (i + 1) + ')')
						.addClass('active')
						.siblings()
						.removeClass('active');
				});
				setTimeout(function () {
					$img.remove();
				}, 500);
			};

		images.forEach(function (image, i_) {
			var $dot = $('<li class="dot"></li>').toggleClass('active', i_ === 0);
			$dot.click(function () {
				i = i_ - 1;
				go();
			})
			$dots.append($dot);
		});

		setInterval(go, 2000 + Math.random() * 1200);
	});
})