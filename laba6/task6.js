var leftpart = document.querySelector('.left');
var leftImg = document.querySelector('.left img');
var rightpart = document.querySelector('.right');
var rightImg = document.querySelector('.right img');

function showLeft()
{
	rightImg.style.display = 'none';
	leftImg.style.display = 'block';
	leftImg.style.width = '75%';
	leftpart.style.width = '650px';
	rightpart.style.width = '22px';
	rightpart.style.right = '-650px';
	
}

function showBoth()
{
	rightImg.style.display = 'block';
	leftImg.style.display = 'block';
	leftImg.style.width = '100%';
	rightImg.style.width = '100%';
	rightpart.style.width = 'calc(225px * 1.5)';
	leftpart.style.width = 'calc(225px * 1.5)';
	rightpart.style.right = '-336px';
}

function showRight()
{
	leftImg.style.display = 'none';
	leftpart.style.width = '22px';
	rightImg.style.display = 'block';
	rightpart.style.width = '650px';
	rightpart.style.right = '-22px';
	rightImg.style.width = '75%';
}