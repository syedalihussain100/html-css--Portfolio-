console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'style.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}





// let themedot = document.getElementsByClassName("theme-dot");
// console.log("themedot",themedot)

// for(var i=0; themedot.length>i; i++){
//     themedot[i].addEventListener("click",function(){
//         let mode = this.dataset.mode;
//         console.log("optionclicked",mode);
//         settheme(mode)
//     })
// }

// let theme = localStorage.getItem('theme')

// if(theme == null){
//     settheme('light')
// }else{
//     settheme(theme)
// }

// function settheme(mode){
// if(mode == ' light'){
//     document.getElementById('theme-style').href = 'style.css'
// }

// if(mode == 'blue'){
//     document.getElementById('theme-style').href = 'blue.css'
// }

// if(mode == 'green'){
//     document.getElementById('theme-style').href = 'green.css'
// }

// if(mode == 'purple'){
//     document.getElementById('theme-style').href = 'purple.css'
// }

// localStorage.getItem('theme',mode)
// }