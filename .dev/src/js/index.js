const changeSkin = function (skin) {
	location.href = location.href.split("#")[0].split("?")[0] + "?skin=" + skin
}

const getCurrentSkin = function () {
	const header = document.getElementById("header")
	let skin = location.href.split("skin=")[1]

	if (!skin) {
		skin = "Snapgram"
	}

	if (skin.indexOf("#") !== -1) {
		skin = skin.split("#")[0]
	}

	const skins = {
		Snapgram: {
			avatars: true,
			list: false,
			autoFullScreen: false,
			cubeEffect: true,
			paginationArrows: false,
		},

		VemDeZAP: {
			avatars: false,
			list: true,
			autoFullScreen: false,
			cubeEffect: false,
			paginationArrows: true,
		},

		FaceSnap: {
			avatars: true,
			list: false,
			autoFullScreen: true,
			cubeEffect: false,
			paginationArrows: true,
		},

		Snapssenger: {
			avatars: false,
			list: false,
			autoFullScreen: false,
			cubeEffect: false,
			paginationArrows: false,
		},
	}

	const el = document.querySelectorAll("#skin option")
	const total = el.length
	for (let i = 0; i < total; i++) {
		const what = skin == el[i].value

		if (what) {
			el[i].setAttribute("selected", "selected")

			header.innerHTML = skin
			header.className = skin
		} else {
			el[i].removeAttribute("selected")
		}
	}

	return {
		name: skin,
		params: skins[skin],
	}
}

const currentSkin = getCurrentSkin()

const stories = window.Zuck(document.querySelector("#stories"), {
	backNative: true,
	previousTap: true,
	skin: currentSkin["name"],
	// autoFullScreen: currentSkin["params"]["autoFullScreen"],
	avatars: currentSkin["params"]["avatars"],
	paginationArrows: currentSkin["params"]["paginationArrows"],
	list: currentSkin["params"]["list"],
	cubeEffect: currentSkin["params"]["cubeEffect"],
	localStorage: true,
	stories: [
		{
			id: "riverscuomo-1",
			photo: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg",
			name: `Dicas de <br> Redação`,
			time: 1710243788,
			items: [
				{
					id: "riverscuomo-item-1",
					type: "photo",
					length: 10,
					src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					preview: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					link: "",
					linkText: false,
					time: 1710243788,
				},
			],
		},
		{
			id: "riveromo-2",
			photo: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg",
			name: `Truques e <br> macetes`,
			time: 1710243788,
			items: [
				{
					id: "rivcuomo-item-2",
					type: "photo",
					length: 10,
					src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					preview: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					link: "",
					linkText: false,
					time: 1710243788,
				},
			],
		},

		{
			id: "riverscuomo-3",
			photo: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg",
			name: `Fique <br> de olho`,
			time: 1710243788,
			items: [
				{
					id: "riverscuomo-item-3",
					type: "photo",
					length: 10,
					src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					preview: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					link: "",
					linkText: false,
					time: 1710243788,
				},
			],
		},
		{
			id: "riverscuomo-4",
			photo: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg",
			name: `Últimas <br> notícias`,
			time: 1710243788,
			items: [
				{
					id: "riverscuomo-item-4",
					type: "photo",
					length: 10,
					src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					preview: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
					link: "",
					linkText: false,
					time: 1710243788,
				},
			],
		},
	],
})

$(".container-artigos").slick({
	slidesToShow: 3,
	autoplay: true,
	mobileFirst: true, //add this one
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
	],
})

$(window).on("resize", function () {
	var width = $(window).width()

	// Verifica se a largura da tela é maior que 1200px
	if (width > 1200) {
		// Verifica se o slider já foi inicializado
		if ($(".auloes__container").hasClass("slick-initialized")) {
			// Destrói o slider
			$(".auloes__container").slick("unslick")
		}
	} else {
		// Re-inicializa o slider se a tela for menor que 1200px
		// e o slider ainda não foi inicializado
		if (!$(".auloes__container").hasClass("slick-initialized")) {
			$(".auloes__container").slick({
				slidesToShow: 8,
				unslick: true,

				autoplay: true,
				mobileFirst: true, //add this one
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							unslick: true,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: true,
						},
					},
				],
			})
		}
	}
})

// Inicializa o slider quando a página é carregada
$(document).ready(function () {
	var width = $(window).width()

	if (width <= 1200) {
		$(".seu-slider").slick({
			slidesToShow: 8,
			unslick: true,

			autoplay: true,
			mobileFirst: true, //add this one
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						unslick: true,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
			],
		})
	}
})
