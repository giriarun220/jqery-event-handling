function selecctSource(sourceID) {
    var checkboxes = document.getElementsByName('selectSource');
    document.getElementById('fa_icon').className = '';

    var source = {
        selectSource_FB: {
            title: 'Please select the Facebook Names',
            icon: 'social-icon fab fa-facebook-square'
        },
        selectSource_Twitr: {
            title: 'Please select the Twitter Names',
            icon: 'social-icon fab fa-twitter-square'
        },
        selectSource_YT: {
            title: 'Please select the Youtube Names',
            icon: 'social-icon fab fa-youtube-square'
        },
        selectSource_Insta: {
            title: 'Please select the Instagram Names',
            icon: 'social-icon fab fa-instagram'
        },
        selectSource_Link: {
            title: 'Please select the LinkedIn Names',
            icon: 'social-icon fab fa-linkedin'
        }
    }


    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            document.getElementById('modal-box').style.display = 'block';
            document.getElementById('modalContainer').innerHTML = source[checkbox.id].title;
            document.getElementById('fa_icon').className = source[checkbox.id].icon;
            break;
        } else {
            document.getElementById('modal-box').style.display = 'none';
        }
    }

    if (document.getElementById(sourceID).checked) {
        document.getElementById('modalContainer').innerHTML = source[sourceID].title;
        document.getElementById('fa_icon').className = source[sourceID].icon;
    }
}