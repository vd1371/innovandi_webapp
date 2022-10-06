import pickle

def load_process(process, binary_file = None):

    if binary_file == None:
        base_dir = "ComputationalCore/saved_projects/"
        with open(base_dir + f"{process}.pkl", "rb") as f:
            return pickle.load(f)

    else:
        with open(f"{process}.pkl", "rb") as f:
            return pickle.loads(binary_file)