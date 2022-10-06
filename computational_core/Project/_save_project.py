import pickle

def save_project(project, to_file = True):

    base_dir = "ComputationalCore/saved_projects/"

    if to_file:
        with open(base_dir + f"{project.name}.pkl", "wb") as f:
            pickle.dump(project, f)

    else:
        with open(f"{project.name}.pkl", "wb") as f:
            return pickle.dumps(project)