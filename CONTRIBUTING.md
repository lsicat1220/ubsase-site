# Commit style guide

We will use conventional commits for this project. For those unaware, that just means we're organizing
our commits based on whether they're a fix, refactor, feature, or whatever else. 

For example:

`feat: Added a new tab to the about page`
`content: Added a new paragraph to events page`
`ui: Changed background color of the leadership page`

Feature (feat) will be used for new functionality of the website. 
Stuff that inherently changes the user experience, like a new button.

Content (content) will be used for changing the content of a website, such as the text or images.
This is stuff that doesn't really change the user experience, but gives them something new or different to look at.

UI (ui) will be used for changing the overall look of the website, like colors or the size of an item.
It's not something new to look at, it just looks different. Basically anything that is just changing the classes of an element.
When using this label, you are saying you are making an intentional change to the design.

Fix (fix) is just for fixing mistakes or visual bugs. This label is not meant for changing anything substantial in terms of user experience, 
just getting things closer the original intention. It should be used when correcting something that was wrong, but not changing the intended design. 
Otherwise, it's a style change.

Refactor (refactor) is for any changes to the code that doesn't change anything at all, but maybe makes development easier
or makes things more organized. Any refactors should not make any meaningful difference to the end user. Furthermore, if the
behavior of the website changes at all, it's not a pure refactor.

Chore (chore) is for anything that doesn't fit into the rest of the categories. 
Stuff like adding dependencies, cleaning up unused files, updating build tools, etc.

When committing your changes, try to make commits small and centered around one change or task. It'll also make describing the commit easier.

# Branching 

No contributor will be allowed to push directly to the master branch. 
If you are changing something, you must create your own branch to commit to and submit a pull request.
In general, you want to make a branch for every singular feature that you're working on.

The naming convention we will use will be "name/feature"

For example,

`lorenzo/event-tab`

When you want to push the branch to the GitHub repo, you will run the following:

`git push origin branchname`

When pushing for the first time, add `-u` after `push`.

Your branch will now appear on the GitHub repo and you can pull request from there. To make things easier,
if you changed something visual on the website, include a screenshot. 

# Clean up

After your branch has successfully been pulled to master, you can safely delete it using the following command:

`git branch -d branchname`

You can also sync the remote branches with GitHub by using:

`git fetch origin --prune`
