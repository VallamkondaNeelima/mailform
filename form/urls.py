from django.urls import path
from . import views
app_name = "forms"
urlpatterns = [
	path("",views.forms,name="forms"),
	path("submit",views.submit,name =  "submit")
]
