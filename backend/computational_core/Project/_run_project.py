
def _run_project(**project_params):

    processes = project_params.get("processes")
    max_n_tries = 10

    for trial in range(max_n_tries):
        if not any_particle_remaining_in_the_main_process(processes):
            break
        for process in processes:
            process.run(project_params)

    if trial == max_n_tries - 1:
        message = "Something is wrong with the settings and numbers."
    else:
        message = "Seems fine"

    return processes, message

def any_particle_remaining_in_the_main_process(processes):

    for process in processes:
        for flow in process.inbound_flows:
            if not flow.is_empty():
                return True

    return False


