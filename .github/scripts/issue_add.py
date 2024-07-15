import os
import json
from github import Github

# Define specific parameters
GITHUB_TOKEN = os.getenv('GH_TOKEN')
REPO_OWNER = 'Hernan2803'
REPO_NAME = 'vina-don-erasmo-page'
ISSUE_NAME = 'Add'
LABEL_NAME = 'add/edit'

categoriesPath= {
    'about': './src/context/AboutContext.json',
    'blog': './src/context/BlogContext.json',
    'product': './src/context/ProductsContext.json',
}

def main():
    g = Github(GITHUB_TOKEN)
    repo = g.get_repo(f'{REPO_OWNER}/{REPO_NAME}')

    # Get open issues with the specific name and tag
    issues = repo.get_issues(state="open", labels=[LABEL_NAME])
    relevant_issues = [issue for issue in issues if ISSUE_NAME in issue.title]

    issue = repo.get_issue(number=relevant_issues[0].number)

    categories = {}

    # Separate elements by category
    for element in json.loads(issue.body):
        category = element['category']
        if category not in categories:
            categories[category] = []
        categories[category].append(element)

    for categoria, items in categories.items():
        for item in items:
            with open(categoriesPath[categoria], 'r') as f:
                jsonData = json.load(f)
            itemData = item['item']

            removedData = [x for x in jsonData if x['id'] != itemData['id']]

            removedData.append(itemData)

            with open(categoriesPath[categoria], 'w') as f:
                json.dump(removedData, f, indent=2)

if __name__ == "__main__":
    main()
