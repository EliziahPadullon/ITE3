from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "pages/dashboard.html")

def reports(request):
    return render(request, "pages/reports.html")

def settings(request):
    return render(request, "pages/settings.html")


#Sample Data
data = [
    {"title": "Users", "count": 150},
    {"title": "Orders", "count": 320},
    {"title": "Revenue", "count": 12450},
]

#View function
def dashboard(request):
    return render(request, 'pages/dashboard.html', {'data': data})

