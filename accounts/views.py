from django.shortcuts import  render, redirect
from django.contrib import messages

from django.contrib.auth import login, logout
from django.urls import reverse_lazy
from django.views.generic import CreateView, TemplateView

import pyrebase

from ._get_firebase_conf import _get_firebase_conf

# Initialising database,auth and firebase for further use
firebase=pyrebase.initialize_app(_get_firebase_conf())
authe = firebase.auth()
database=firebase.database()
 
def signIn(request):
    return render(request,"login.html")
 
def postsignIn(request):

    email=request.POST.get('email')
    pasw=request.POST.get('pass')
    try:
        # if there is no error then signin the user with given email and password
        user=authe.sign_in_with_email_and_password(email,pasw)
    except Exception as e:
        print (e)
        message="Invalid Credentials!!Please ChecK your Data"
        return render(request,"login.html",{"message":message})
    session_id=user['idToken']
    
    request.session['uid']=str(session_id)
    request.session['user_email'] = user['email']

    return render(request,"home.html",{"email":email})
 
def logout(request):
    try:
        del request.session['uid']
    except:
        pass
    return render(request,"login.html")
 
def signUp(request):
    return render(request,"signup.html")
 
def postsignUp(request):
    email = request.POST.get('email')
    passs = request.POST.get('pass')
    name = request.POST.get('name')
    try:
    # creating a user with the given email and password
        user=authe.create_user_with_email_and_password(email,passs)
        uid = user['localId']
        idtoken = request.session['uid']
    except Exception as e:
        print (e)
        return render(request, "signup.html")
    return render(request,"login.html")