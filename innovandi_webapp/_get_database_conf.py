import os
from configparser import ConfigParser


def _get_database_conf(filename = os.path.join('innovandi_webapp', 'conf.ini'),
                        section = 'postgresql'):
    # create a parser
    parser = ConfigParser()
    # read config file
    parser.read(filename)

    # get section, default to postgresql
    conf = {}
    conf['default'] = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            conf['default'][param[0].upper()] = param[1]
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))

    return conf