import os
import argparse
import requests

def close_issue(issue_number):
    # Get the GitHub token from the environment
    GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
    REPO = os.getenv('GITHUB_REPOSITORY')

    # Configure the URL and headers for the GitHub API request
    repo = os.getenv('GITHUB_REPOSITORY')
    url = f'https://api.github.com/repos/{REPO}/issues/{issue_number}'
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3+json'
    }

    # Data to close the issue
    data = {
        'state': 'closed'
    }

    # Make the PATCH request to the GitHub API to close the issue
    response = requests.patch(url, headers=headers, json=data)

    # Check the result of the request
    if response.status_code == 200:
        print(f'Issue #{issue_number} closed successfully.')
    else:
        print(f'Error closing issue #{issue_number}: {response.status_code}')
        print(response.json())
        response.raise_for_status()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Close an issue based on its number.')
    parser.add_argument("-i", "--issue_number", help="Issue number to close")

    args = parser.parse_args()

    close_issue(args.issue_number)
