

/* nav animation script */
    let marker = document.querySelector('#marker');
	let nav_links = document.querySelectorAll('.tab-style-1 .tab-control .tab-control-item');
	function indicator(e) {
	  marker.style.left = e.offsetLeft + 'px';
	  marker.style.width = e.offsetWidth + 'px';
	}
	nav_links.forEach((link) => {
	  link.addEventListener('click', (e) => {
		e.preventDefault();
		indicator(e.target);
	  });
	});
/* nav animation script */

/* back_to_top script */
          let back_to_top = document.querySelector('.back_to_top');
		  window.addEventListener('scroll', () => {
			if (window.pageYOffset > 100) {
			  back_to_top.classList.add('show');
			} else {
			  back_to_top.classList.remove('show');
			}
		  });
		  back_to_top.addEventListener('click', function (e) {
			window.scrollTo({
			  top: 0,
			  left: 0,
			  behavior: 'smooth',
			});
		  });
/* back_to_top script */

/* popup script */
    let navbar = document.querySelector('.nav-section');

	let btn_open = document.querySelectorAll('#login_btn');
    let modal_container = document.querySelector('.modal-container.login');
    let btn_close = modal_container.querySelector('.btn-close');

	btn_open.forEach((btn) => {
	  btn.addEventListener('click', (e) => {
		e.preventDefault();
		modal_container.classList.add('active');
		navbar.classList.remove('header-sticky');
	  });
	});

	btn_close.addEventListener('click', () => {
	  modal_container.classList.remove('active');
	  navbar.classList.add('header-sticky');
	});

	modal_container.addEventListener('click', (e) => {
	  if (e.target.closest("modal-inner")) {
		modal_container.classList.add('active');
	  } else {
		e.target.classList.remove('active');
	  }
	  if(modal_container.classList.contains('active')){
			navbar.classList.remove('header-sticky');
		}
		else{
			navbar.classList.add('header-sticky');
		};
	})

	let register_btn = document.querySelectorAll('#register_btn');
	let register_modal = document.querySelector('.modal-container.register');
	let register_close = register_modal.querySelector('.btn-close');
	
	register_btn.forEach((btn) => {
	  btn.addEventListener('click', (e) => {
		e.preventDefault();
		register_modal.classList.add('active');
		navbar.classList.remove('header-sticky');
	  });
	});

	register_close.addEventListener('click', () => {
	  register_modal.classList.remove('active');
	  navbar.classList.add('header-sticky');
	});

	register_modal.addEventListener('click', (e) => {
	  if (e.target.closest("modal-inner")) {
		register_modal.classList.add('active');
	  } else {
		e.target.classList.remove('active');
	  }
	  if(register_modal.classList.contains('active')){
			navbar.classList.remove('header-sticky');
		}
		else{
			navbar.classList.add('header-sticky');
		};
	})


	let calendar_btn = document.querySelectorAll('#calendar_btn');
	let calendar_modal = document.querySelector('.modal-container.calendar');
	let calendar_close = calendar_modal.querySelector('.btn-close');
	
	calendar_btn.forEach((btn) => {
	  btn.addEventListener('click', (e) => {
		e.preventDefault();
		calendar_modal.classList.add('active');
		navbar.classList.remove('header-sticky');
	  });
	});

	calendar_close.addEventListener('click', () => {
		calendar_modal.classList.remove('active');
	  navbar.classList.add('header-sticky');
	});

	calendar_modal.addEventListener('click', (e) => {
	  if (e.target.closest("modal-inner")) {
		calendar_modal.classList.add('active');
	  } else {
		e.target.classList.remove('active');
	  }
	  if(calendar_modal.classList.contains('active')){
			navbar.classList.remove('header-sticky');
		}
		else{
			navbar.classList.add('header-sticky');
		};
	})
/* popup script */

/* animation script */
    let product_img = document.querySelector('.product-img img');
	let product_thumbnail = document.querySelectorAll('.product-thumbnail');
	
	product_thumbnail.forEach((product) => {
	  product.addEventListener('click', () => {
		product_thumbnail.forEach((product) => {
		  product.classList.remove('active');
		});
		product.classList.add('active');
	
		let img = product.querySelector('img').getAttribute('src');
		let index = product.querySelector('img').getAttribute('data-index');
	
		product_img.setAttribute('src', img);
		product_img.setAttribute('data-index', index);
	
		product_img.classList.add('product-down-animation');
		setTimeout(() => {
		  product_img.classList.remove('product-down-animation');
		}, 500);
	  });
	});
/* animation script */

