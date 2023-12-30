@echo off

REM Get the external IP address using curl and checkip service
set "TempFile=%TEMP%\curl_output.txt"
curl -s checkip.amazonaws.com > %TempFile%

REM Check if the IP address is empty
set /p NetworkIP=<%TempFile%
if not defined NetworkIP (
    echo Failed to obtain the IP address.
    exit /b 1
)

echo IP address: %NetworkIP%

REM Write the %NetworkIP% address to the .devcontainer/.env file
echo REACT_NATIVE_PACKAGER_HOSTNAME=%NetworkIP% > .devcontainer/.env

REM Clean up temporary file
del %TempFile%
