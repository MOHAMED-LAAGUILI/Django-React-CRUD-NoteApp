# check py is installed
python --version  
if not defined it version the add the installation to the system variables after install it from the org site

# intialiaze project 
python -m venv env

# activate py sctips
env/Scripts/activate.bat

# dependencies
create file   requirements.txt
that file like a package that stores the lib we need for any project 
and add to it

asgiref
Django
django-cors-headers
djangorestframework
djangorestframework-simplejwt
PyJWT
pytz
sqlparse
psycopg2-binary
python-dotenv

# Django installation
django-admin startproject backend
cd backend
python manage.py startapp api