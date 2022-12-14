import pickle

def load_flow(flow, binary_file = None):

    if binary_file == None:
        base_dir = "ComputationalCore/saved_projects/"
        with open(base_dir + f"{flow}.pkl", "rb") as f:
            return pickle.load(f)

    else:
        with open(f"{flow}.pkl", "rb") as f:
            return pickle.loads(binary_file)