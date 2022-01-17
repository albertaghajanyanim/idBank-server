### Git clone including submodules
 - git clone --recurse-submodules -j8 git://github.com/<path>.git
### Git submodules

##### Run command
- git submodule add "remote_url" "destination_folder"
- git commit -m "Added the submodule to the project."
- git push

##### Pull a Git Submodule
###### Whenever you are cloning a Git repository having submodules, you need to execute an extra command in order for the submodules to be pulled.
- git submodule update --init --recursive

##### Remove Git submodules
###### Helpful links
 - https://riptutorial.com/git/example/2652/removing-a-submodule
###### In order to remove a Git submodule from your repository, use the “git submodule deinit” command followed by the “git rm” command and specify the name of the submodule folder.

- git submodule deinit "submodule"
- git rm "submodule"

### Helpful links
 - https://devconnected.com/how-to-add-and-update-git-submodules/
 - https://codex.so/git-submodules-cheatsheet