$( "div" ).data( "test", { first: "Red", last: "Green." });
$( "span:first" ).text( $( "div" ).data( "test" ).first );
$( "span:last" ).text( $( "div" ).data( "test" ).last );