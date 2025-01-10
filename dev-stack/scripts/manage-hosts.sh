#!/bin/bash

# PATH TO YOUR HOSTS FILE
ETC_HOSTS=/etc/hosts

# DEFAULT IP FOR HOSTNAME
IPV4="127.0.0.1"
IPV6="::1"

# Hostname to add/remove.
HOSTNAME=$2

removehost() {
    echo "removing host";
    if [ -n "$(grep $HOSTNAME /etc/hosts)" ]
    then
        echo "$HOSTNAME Found in your $ETC_HOSTS, Removing now...";
        sudo sed -i".bak" "/$HOSTNAME/d" $ETC_HOSTS
    else
        echo "$HOSTNAME was not found in your $ETC_HOSTS";
    fi
}

addhost() {
    echo "adding host";
    HOSTS_LINE_IPV4="$IPV4\t$HOSTNAME\n"
    HOSTS_LINE_IPV6="$IPV6\t\t$HOSTNAME\n"

    if [ -n "$(grep $HOSTNAME /etc/hosts)" ]
    then
        echo "$HOSTNAME already exists : $(grep $HOSTNAME $ETC_HOSTS)"
    else
        echo "Adding $HOSTNAME to your $ETC_HOSTS";
        sudo -- sh -c -e "printf '$HOSTS_LINE_IPV4' >> /etc/hosts";
        sudo -- sh -c -e "printf '$HOSTS_LINE_IPV6' >> /etc/hosts";

        if [ -n "$(grep $HOSTNAME /etc/hosts)" ]
        then
            echo "$HOSTNAME was added successfully \n $(grep $HOSTNAME /etc/hosts)";
        else
            echo "Failed to Add $HOSTNAME, Try again!";
        fi
    fi
}

$@
