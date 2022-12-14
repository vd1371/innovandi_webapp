import pickle
from copy import deepcopy

def save_process(process, to_file = True):

    tmp_process = deepcopy(process)

    try:
        delattr(tmp_process, 'inbound_flows')
        delattr(tmp_process, 'outbound_flows')
    except AttributeError:
        pass

    base_dir = "ComputationalCore/saved_projects/"

    if to_file:
        with open(base_dir + f"{process.name}.pkl", "wb") as f:
            pickle.dump(process, f)

    else:
        with open(f"{process.name}.pkl", "wb") as f:
            return pickle.dumps(process)
