from configparser import ConfigParser
from django.forms import ValidationError

def _validate_authentication_password(auth_pass,
                                        filename = 'innovandi/conf.ini',
                                        section = 'authentication_pass'):
    # create a parser
    parser = ConfigParser()
    # read config file
    parser.read(filename)

    params = parser.items(section)
    if auth_pass != params[0][1]:
        raise ValidationError('Invalid authentication password.',
                                code = 'invalid_auth')

if __name__ == "__main__":

    _validate_authentication_password("hello",
                                        filename = '../innovandi/conf.ini')