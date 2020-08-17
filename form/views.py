from django.shortcuts import render
from django.http import HttpResponse 

# Create your views here.
def forms(request):
	return render(request,"form/forms.html")

def submit(request):
	
	if(request.method=="GET"):
		return HttpResponse("Please Submit the Form of Details")
	if(request.method=="POST"):
		k = request.POST
		dictionary = {i:request.POST[i] for i in list(k)[:17]}
		dictionary["certificateData"] = list(zip(k.getlist("certificate[]"),k.getlist("institute[]")))
		dictionary["workExperienceData"] = list(zip(k.getlist("role[]"),k.getlist("company[]"),k.getlist("from[]"),k.getlist("to[]"),k.getlist("internexp[]")))
		dictionary["skills"] = k.getlist("skill[]")
		dictionary["awards"] = k.getlist("award[]")
		dictionary["projectData"] = list(zip(k.getlist("project[]"),k.getlist("d[]")))
		
		
		return render(request,"form/resume.html",dictionary)
		

		
		
		
		

