from django.shortcuts import render

# Home Page
def index(request):
    return render(request, "pages/portfolio.html", {'page': 'portfolio:index'})

# About Me Page
def aboutme(request):
    return render(request, "pages/aboutme.html", {'page': 'portfolio:aboutme'})

# Projects Page
def project(request):
    return render(request, "pages/project.html", {'page': 'portfolio:project'})    

# Contact Page
def contact(request):
    return render(request, "pages/contact.html", {'page': 'portfolio:contact'})
