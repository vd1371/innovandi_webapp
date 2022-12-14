import numpy as np

def get_random_name(name):

	return name + str(hash(np.random.random()))[:6]

if __name__ == "__main__":
	print (get_random_name("Test"))