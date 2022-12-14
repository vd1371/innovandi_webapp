from .Beta import Beta
from .Binomial import Binomial
from .Constant import Constant
from .Exponential import Exponential
from .Gamma import Gamma
from .LogNormal import LogNormal
from .Normal import Normal

def get_distribution(dist_name, *args):

	dists = {'beta': Beta,
			'binomial': Binomial,
			'constant': Constant,
			'exponential': Exponential,
			'gamma': Gamma,
			'lognormal': LogNormal,
			'normal': Normal}

	return dists.get(dist_name.lower())(*args)