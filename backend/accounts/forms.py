from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import User
from ._validate_authentication_password import _validate_authentication_password


# Create your forms here.

class UserForm(UserCreationForm):
    email = forms.EmailField(required=True)
    # captcha_field = CaptchaField(label = 'Please enter captcha:')
    # authentication_password = forms.CharField(max_length = 100,
    #                                         validators = [_validate_authentication_password])

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2", "captcha_field")

    def save(self, commit=True):
        user = super(UserForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user