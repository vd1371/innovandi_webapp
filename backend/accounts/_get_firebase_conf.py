import os
from configparser import ConfigParser


def _get_firebase_conf(filename = os.path.join('innovandi_webapp', 'conf.ini'),
                        section = 'firebase'):
    # create a parser
    parser = ConfigParser()
    parser.optionxform = str
    # read config file
    parser.read(filename)

    # get section, default to postgresql
    conf = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            conf[param[0]] = param[1]
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))
    
    return conf