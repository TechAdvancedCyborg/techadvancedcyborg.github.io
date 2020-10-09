import glob
from jsmin import jsmin
from rcssmin import cssmin
import sass
import os

dirs = ["./","./resume/","./stats/","./weather/","./blog/", "./tools/", "./typing/","./matrix/"]

def minifydir(dir):
	for file in glob.glob(dir+"*.min.js"):
		os.remove(file)

	for file in glob.glob(dir+"*.min.css"):
		os.remove(file)

	for file in glob.glob(dir+"*.js"):
		fileopen = open(file,"r+", encoding="utf8")
		text = fileopen.read()
		fileopen.close()
		fileopen = open(file[:-3]+".min.js","w", encoding="utf8")
		fileopen.write(jsmin(text))
		fileopen.close()

	for file in glob.glob(dir+"*.scss"):
		fileopen = open(file,"r+", encoding="utf8")
		text = fileopen.read()
		fileopen.close()
		fileopen = open(file[:-5]+".min.css","w", encoding="utf8")
		fileopen.write(cssmin(sass.compile(string=text)))
		fileopen.close()


for loopdir in dirs:
	minifydir(loopdir)


	
