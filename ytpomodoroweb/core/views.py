from random import randint
from django.conf import settings
from django.shortcuts import render, get_object_or_404, redirect

def index(request):
	context = {
	}
	return render(request, 'core/intropage.html', context)

def youtube_player(request, yt_string=None):
	
	context = {
		'yt_string' : yt_string,
	}
	return render(request, 'core/youtubevideo.html', context)

def simple_hint_page(request):
	context = {
	} 
	return render(request, 'core/simple_hint_page.html', context)