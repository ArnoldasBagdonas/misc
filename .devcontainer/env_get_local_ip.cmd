@echo off

REM Get the IP address using ping
for /f "delims=[] tokens=2" %%a in ('ping -4 -n 1 %ComputerName% ^| findstr [') do set NetworkIP=%%a

echo Network IP address: %NetworkIP%

REM Write the $NetworkIP address to the .devcontainer/.env file
echo REACT_NATIVE_PACKAGER_HOSTNAME=%NetworkIP% > .devcontainer/.env
