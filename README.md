## fun with javascript
### How to operate
create full env (build, run)
```
make full
```
stop but don't delete the image:
```
make stop
```
stop and clean everything: 
```
make clean
```
### Common problems in installation
If you can't run make and get ```invalid active developer path, missing xcrun```
```
xcode-select --install
```
### still need to add:
```
- frontend not running during make full yet
- need to add frontend tests to make full
- need to create a seperate github action for frontend.
```
