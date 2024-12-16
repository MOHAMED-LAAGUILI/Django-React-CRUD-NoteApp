# check py is installed
python --version  
if not defined it version the add the installation to the system variables after install it from the org site

# 1. instal virtual env
pip install virtualenvwrapper-win

# 2. Create and activate a new virtual environment
mkvirtualenv notesenv

# If you need to start it
workon notesenv

# If you need to deactivate it later
deactivate

# 3. Install Django 
pip install django
django-admin startproject "app name"
python manage.py startapp "app sub name" 
pip install djangorestframework 

# Declare 
adding your sub fulde name and rest framwork to app name file in settings.py 

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'noteapp',
    ''rest_framework''
]

# create the admine super user 
python manage.py createsuperuser
access to  http://127.0.0.1:8004/admin

# each model u create or u change in models.py u run 
python manage.py makemigrations
python manage.py migrate


# to run server
python manage.py runserve

# Errors 
1- error rest frame work undefined after installation 

# solutions
Open the Command Palette by pressing Ctrl+Shift+P (Windows/Linux)
Type Python: Select Interpreter and select it.
Choose the interpreter that points to the virtual environment where djangorestframework is installed.