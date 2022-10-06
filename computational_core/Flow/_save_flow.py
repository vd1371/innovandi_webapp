import pickle
from copy import deepcopy

def save_flow(flow, to_file = True):

    tmp_flow = deepcopy(flow)

    base_dir = "ComputationalCore/saved_projects/"

    if to_file:
        with open(base_dir + f"{flow.name}.pkl", "wb") as f:
            pickle.dump(flow, f)

    else:
        with open(f"{flow.name}.pkl", "wb") as f:
            return pickle.dumps(flow)